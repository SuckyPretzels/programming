const int led5 = 5;
const int led4 = 4;
const int led3 = 3;
const int led2 = 2;
const int anal = A0;
int analV = 0;

void setup() {
  pinMode(anal, INPUT);
  pinMode(led5, OUTPUT);
  pinMode(led4, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led2, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  analV = analogRead(anal);

  Serial.println(analV);

  if (analV >= 250 && analV < 500) {
    digitalWrite(led5, HIGH);
    digitalWrite(led4, LOW);
    digitalWrite(led3, LOW);
    digitalWrite(led2, LOW);
  } else if (analV >= 500 && analV < 750) {
    digitalWrite(led5, HIGH);
    digitalWrite(led4, HIGH);
    digitalWrite(led3, LOW);
    digitalWrite(led2, LOW);
  } else if (analV >= 750 && analV < 1000) {
    digitalWrite(led5, HIGH);
    digitalWrite(led4, HIGH);
    digitalWrite(led3, HIGH);
    digitalWrite(led2, LOW);
  } else if (analV >= 1000) {
    digitalWrite(led5, HIGH);
    digitalWrite(led4, HIGH);
    digitalWrite(led3, HIGH);
    digitalWrite(led2, HIGH);
  } else {
    digitalWrite(led5, LOW);
  }
}
