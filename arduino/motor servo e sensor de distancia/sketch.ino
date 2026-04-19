#include <Servo.h>

Servo servo1;
const int trigger = 2;
const int echo = 3;
const int motor = 4;

long duracao;
float distancia;

const int distanciaLimite = 100;
char comando = ' ';

void setup() {
  Serial.begin(9600);
  pinMode(trigger, OUTPUT);
  pinMode(echo, INPUT);
  servo1.attach(motor);
  servo1.write(90);

  digitalWrite(trigger, LOW);
  delayMicroseconds(2);
  digitalWrite(trigger, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigger, LOW);

  duracao = pulseIn(echo, HIGH);
  distancia = 0.01715 * duracao;
  
  Serial.println("Sistema de busca ativo");
}

void loop() {
  digitalWrite(trigger, LOW);
  delayMicroseconds(2);
  digitalWrite(trigger, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigger, LOW);

  duracao = pulseIn(echo, HIGH);
  distancia = 0.01715 * duracao;

  if (Serial.available() > 0) {
    comando = toupper(Serial.read());
  }

  if (distancia > distanciaLimite) {
    servo1.write(90);
    Serial.println("Aguardando objeto...");
  } else {
    if (comando == 'D') {
      servo1.write(180);
      Serial.println("Objeto detectado. Girando para a direita");
    } else if (comando == 'E') {
      servo1.write(0);
      Serial.println("Objeto detectado. Girando para a esquerda");      
    }
  }

  // Serial.print("Leitura SENSOR = ");
  // Serial.println(distancia);

  delay(100);
}