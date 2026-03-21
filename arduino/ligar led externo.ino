const int pino_in = 3;
const int pino_out = 2;
bool botao = false;
bool var_aux = false;
void setup() {
  pinMode(pino_in, INPUT);
  pinMode(pino_out, OUTPUT);

  Serial.begin(9600);
}

void loop() {
  botao = digitalRead(pino_in);
  if (var_aux == false) {
    Serial.println("\nO led esta desligado!");
    var_aux = true;
  }

  if (botao == HIGH) {
    Serial.println("\nO led esta ligado!");
    digitalWrite(pino_out, HIGH);
    delay(2000);
    Serial.println("\nO led esta desligado!");
  } else if (botao == LOW) {
    digitalWrite(pino_out, LOW);
  } 
}
