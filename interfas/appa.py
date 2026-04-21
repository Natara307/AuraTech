from flask import Flask, jsonify, render_template
import serial
from threading import Thread
import time
import csv
from datetime import datetime

# 👇 usamos carpeta "home"
app = Flask(__name__, template_folder='home')


PUERTO = 'COM3'
BAUDIOS = 115200

temperatura_actual = 0.0
nivel_actual = "CARGANDO"

def leer_serial():
    global temperatura_actual, nivel_actual

    try:
        ser = serial.Serial(PUERTO, BAUDIOS, timeout=1)
        time.sleep(2)
        print("Conectado a", PUERTO)
    except Exception as e:
        print("Error conectando:", e)
        return

    # CSV
    archivo = open('datos_temperatura.csv', mode='w', newline='')
    writer = csv.writer(archivo)
    writer.writerow(["Fecha", "Temperatura", "Nivel"])

    while True:
        try:
            linea = ser.readline().decode('utf-8', errors='ignore').strip()

            if linea:
                print("RECIBIDO:", linea)

                partes = linea.split(",")

                if len(partes) == 2:
                    try:
                        temp = float(partes[0])
                        nivel = partes[1]

                        temperatura_actual = temp
                        nivel_actual = nivel

                        # Guardar CSV
                        fecha = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                        writer.writerow([fecha, temp, nivel])
                        archivo.flush()

                    except:
                        print("Error en datos")

        except:
            pass


@app.route('/')
def index():
    return render_template('house.html')


@app.route('/datos')
def datos():
    print("ENVIANDO:", temperatura_actual)

    return jsonify({
        "temperatura": temperatura_actual,
        "nivel": nivel_actual
    })


if __name__ == '__main__':
    hilo = Thread(target=leer_serial)
    hilo.daemon = True
    hilo.start()

    app.run(host='0.0.0.0', port=8000, debug=True, use_reloader=False)
