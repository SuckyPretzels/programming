int sensor = 2;
int led = 3;

void setup() {
  Serial.begin(9600);
  pinMode(led, OUTPUT);
  pinMode(sensor, INPUT);

  Serial.println("Sensor inicializado");
}

void loop() {
  if (digitalRead(sensor) == HIGH) {
    digitalWrite(led, HIGH);
    Serial.println("obstaculo detectado");
  } else {
    digitalWrite(led, LOW);
  }
}