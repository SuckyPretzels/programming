const int ledR = 6;
const int ledG = 5;
const int ledB = 3;

const int potR = A0;
const int potG = A1;
const int potB = A2;

void setup() {
  pinMode(potR, INPUT);
  pinMode(potG, INPUT);
  pinMode(potB, INPUT);
  pinMode(ledR, OUTPUT);
  pinMode(ledG, OUTPUT);
  pinMode(ledB, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  analogWrite(6, map(analogRead(A0), 0, 1023, 0, 255));
  analogWrite(5, map(analogRead(A1), 0, 1023, 0, 255));
  analogWrite(3, map(analogRead(A2), 0, 1023, 0, 255));
  delay(10);
}
