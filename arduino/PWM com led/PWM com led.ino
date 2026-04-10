void setup() {
  pinMode(3, INPUT);
  pinMode(A0, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  analogWrite(3, map(analogRead(A0), 0, 1023, 0, 255));
  Serial.println(map(analogRead(A0), 0, 1023, 0, 255));
}
