int trigger = 5;
int echo = 6;
int led = 13;
long duracao;
float distancia;
int distanciaInt = 0;
int distanciaAnterior = 0;

void setup() {
  Serial.begin(9600);
  pinMode(trigger, OUTPUT);
  pinMode(echo, INPUT);

  digitalWrite(trigger, LOW);
  delayMicroseconds(2);
  digitalWrite(trigger, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigger, LOW);

  duracao = pulseIn(echo, HIGH);
  distancia = 0.01715 * duracao;
  distanciaInt = static_cast<int>(distancia);
  distanciaAnterior = distanciaInt;

  Serial.println("Sensor inicializado");
}


void loop() {
  digitalWrite(trigger, LOW);
  delayMicroseconds(2);
  digitalWrite(trigger, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigger, LOW);

  duracao = pulseIn(echo, HIGH);
  distancia = 0.01715 * duracao;
  distanciaInt = static_cast<int>(distancia);

  if (distanciaAnterior != distanciaInt) {
    if (distancia < 100) {
      Serial.print("Leitura SENSOR = ");
      Serial.print(distancia);
      Serial.println(" | LED ligado");
    } else {
      Serial.print("Leitura SENSOR = ");
      Serial.print(distancia);
      Serial.println(" | LED desligado");
  }
  distanciaAnterior = distanciaInt;
}

  if (distancia < 100) {
    digitalWrite(led, HIGH);
  } else {
    digitalWrite(led, LOW);
  }
}