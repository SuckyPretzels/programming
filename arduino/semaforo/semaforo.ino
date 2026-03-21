/*
Legenda:
1 = verde
2 = amarelo
3 = vermelho
*/

const int led1a = 7;
const int led2a = 6;
const int led3a = 5;
const int led3b = 4;
const int led2b = 3;
const int led1b = 2;

void setup() {
  pinMode(led1a, OUTPUT);
  pinMode(led2a, OUTPUT);
  pinMode(led3a, OUTPUT);
  pinMode(led1b, OUTPUT);
  pinMode(led2b, OUTPUT);
  pinMode(led3b, OUTPUT);
  Serial.begin(9600);
}

void loop() {


  // Estado 1
  digitalWrite(led1a, HIGH);
  digitalWrite(led2a, LOW);
  digitalWrite(led3a, LOW);
  digitalWrite(led1b, LOW);
  digitalWrite(led2b, LOW);
  digitalWrite(led3b, HIGH);

  if (digitalRead(led1a) == HIGH) {
    Serial.print("Verde");
    Serial.print(" ");
  } else if (digitalRead(led2a) == HIGH) {
    Serial.print("Amarelo");
    Serial.print(" ");
  } else if (digitalRead(led3a) == HIGH) {
    Serial.print("Vermelho");
    Serial.print(" ");
  }
  if (digitalRead(led1b) == HIGH) {
    Serial.print("| ");
    Serial.println("Verde");
  } else if (digitalRead(led2b) == HIGH) {
    Serial.print("| ");
    Serial.println("Amarelo");
  } else if (digitalRead(led3b) == HIGH) {
    Serial.print("| ");
    Serial.println("Vermelho");
  }

  delay(3000);

  // Estado 2
  digitalWrite(led1a, LOW);
  digitalWrite(led2a, HIGH);
  digitalWrite(led3a, LOW);
  digitalWrite(led1b, LOW);
  digitalWrite(led2b, LOW);
  digitalWrite(led3b, HIGH);

  if (digitalRead(led1a) == HIGH) {
    Serial.print("Verde");
    Serial.print(" ");
  } else if (digitalRead(led2a) == HIGH) {
    Serial.print("Amarelo");
    Serial.print(" ");
  } else if (digitalRead(led3a) == HIGH) {
    Serial.print("Vermelho");
    Serial.print(" ");
  }
  if (digitalRead(led1b) == HIGH) {
    Serial.print("| ");
    Serial.println("Verde");
  } else if (digitalRead(led2b) == HIGH) {
    Serial.print("| ");
    Serial.println("Amarelo");
  } else if (digitalRead(led3b) == HIGH) {
    Serial.print("| ");
    Serial.println("Vermelho");
  }

  delay(2000);

  // Estado 3
  digitalWrite(led1a, LOW);
  digitalWrite(led2a, LOW);
  digitalWrite(led3a, HIGH);
  digitalWrite(led1b, HIGH);
  digitalWrite(led2b, LOW);
  digitalWrite(led3b, LOW);

  if (digitalRead(led1a) == HIGH) {
    Serial.print("Verde");
    Serial.print(" ");
  } else if (digitalRead(led2a) == HIGH) {
    Serial.print("Amarelo");
    Serial.print(" ");
  } else if (digitalRead(led3a) == HIGH) {
    Serial.print("Vermelho");
    Serial.print(" ");
  }
  if (digitalRead(led1b) == HIGH) {
    Serial.print("| ");
    Serial.println("Verde");
  } else if (digitalRead(led2b) == HIGH) {
    Serial.print("| ");
    Serial.println("Amarelo");
  } else if (digitalRead(led3b) == HIGH) {
    Serial.print("| ");
    Serial.println("Vermelho");
  }

  delay(3000);

  // Estado 4
  digitalWrite(led1a, LOW);
  digitalWrite(led2a, LOW);
  digitalWrite(led3a, HIGH);
  digitalWrite(led1b, LOW);
  digitalWrite(led2b, HIGH);
  digitalWrite(led3b, LOW);

  if (digitalRead(led1a) == HIGH) {
    Serial.print("Verde");
    Serial.print(" ");
  } else if (digitalRead(led2a) == HIGH) {
    Serial.print("Amarelo");
    Serial.print(" ");
  } else if (digitalRead(led3a) == HIGH) {
    Serial.print("Vermelho");
    Serial.print(" ");
  }
  if (digitalRead(led1b) == HIGH) {
    Serial.print("| ");
    Serial.println("Verde");
  } else if (digitalRead(led2b) == HIGH) {
    Serial.print("| ");
    Serial.println("Amarelo");
  } else if (digitalRead(led3b) == HIGH) {
    Serial.print("| ");
    Serial.println("Vermelho");
  }

  delay(2000);
}
