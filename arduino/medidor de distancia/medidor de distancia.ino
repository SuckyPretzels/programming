int min2 = 0;
int max2 = 0;
long duracao;
float distancia;

void setup() {
  Serial.begin(9600);
  pinMode(3, OUTPUT);
  pinMode(2, INPUT);

  digitalWrite(3, LOW);
  delayMicroseconds(2);
  digitalWrite(3, HIGH);
  delayMicroseconds(10);
  digitalWrite(3, LOW);

  duracao = pulseIn(2, HIGH);

  distancia = 0.01715 * duracao;

  min2 = distancia;
  max2 = distancia;
  Serial.println("Sensor inicializado");
}

void loop() {
  digitalWrite(3, LOW);
  delayMicroseconds(2);
  digitalWrite(3, HIGH);
  delayMicroseconds(10);
  digitalWrite(3, LOW);

  duracao = pulseIn(2, HIGH);
  distancia = 0.01715 * duracao;


  if (distancia < min2) {
    min2 = distancia;
  }

  if(distancia > max2) {
    max2 = distancia;
  }

  Serial.print("Leitura SENSOR = ");
  Serial.print(distancia);
  Serial.print("  MINIMO = ");
  Serial.print(min2);
  Serial.print("  MAXIMO = ");
  Serial.println(max2);
  delay(1000);
}