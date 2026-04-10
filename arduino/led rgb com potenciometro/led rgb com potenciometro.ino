void setup() {
  pinMode(A0, INPUT);
  pinMode(A1, INPUT);
  pinMode(A2, INPUT);
  pinMode(6, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(3, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  analogWrite(6, map(analogRead(A0), 0, 1023, 0, 255));
  analogWrite(5, map(analogRead(A1), 0, 1023, 0, 255));
  analogWrite(3, map(analogRead(A2), 0, 1023, 0, 255));
  delay(10);
}