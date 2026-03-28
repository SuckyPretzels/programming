/*
Legenda:
1 = verde
2 = amarelo
3 = vermelho
*/

const int led1 = 7;
const int led2 = 6;
const int led3 = 5;
const int button1 = 3;
const int button2 = 2;

void setup() {
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(button1, INPUT);
  pinMode(button2, INPUT);
  Serial.begin(9600);
}

void loop() {
  if (digitalRead(button1) == HIGH) {
    digitalWrite(led1, LOW);
    digitalWrite(led2, LOW);
    digitalWrite(led3, HIGH);
    print();
    delay(1000);
    digitalWrite(led1, LOW);
    digitalWrite(led2, HIGH);
    digitalWrite(led3, LOW);
    print();
    delay(1000);
    digitalWrite(led1, HIGH);
    digitalWrite(led2, LOW);
    digitalWrite(led3, LOW);
    print();
    delay(1000);
    digitalWrite(led1, LOW);
    digitalWrite(led2, LOW);
    digitalWrite(led3, LOW);
  } else if (digitalRead(button1) == LOW) {
    Serial.println("-------");
  }

  if (digitalRead(button2) == HIGH) {
    digitalWrite(led1, HIGH);
    digitalWrite(led2, LOW);
    digitalWrite(led3, LOW);
    print();
    delay(1000);
    digitalWrite(led1, LOW);
    digitalWrite(led2, LOW);
    digitalWrite(led3, HIGH);
    print();
    delay(1000);
    digitalWrite(led1, LOW);
    digitalWrite(led2, HIGH);
    digitalWrite(led3, LOW);
    print();
    delay(1000);
    digitalWrite(led1, LOW);
    digitalWrite(led2, LOW);
    digitalWrite(led3, LOW);
  } else if (digitalRead(button2) == LOW) {
    Serial.println("-------");
  }
}

void print() {
  if (digitalRead(led1) == HIGH) {
    Serial.println("Verde");
  } else if (digitalRead(led2) == HIGH) {
    Serial.println("Amarelo");
  } else if (digitalRead(led3) == HIGH) {
    Serial.println("Vermelho");
  }
}
