const int pinoB = 10; // A-1B
const int pinoA = 11; // A-1A
const int pinoA2 = 4; // B-1A
const int pinoB2 = 5; // B-2A


void setup() {
  Serial.begin(9600);

  pinMode(pinoA, OUTPUT);
  pinMode(pinoB, OUTPUT);
  pinMode(pinoA2, OUTPUT);
  pinMode(pinoB2, OUTPUT);

  Serial.println("Iniciando teste");
}

void loop() {
  Serial.println("Sentido horario... "); 
  digitalWrite(pinoB, LOW);
  digitalWrite(pinoB2, LOW);
  
  for( int v = 0; v <= 255; v += 5){
    analogWrite(pinoA, v);
    analogWrite(pinoA2, v);
    delay(30);
  }
  delay(2000);

  Serial.println("Parando...");
  digitalWrite(pinoA, LOW);
  digitalWrite(pinoB, LOW);
  digitalWrite(pinoA2, LOW);
  digitalWrite(pinoB2, LOW);
  delay(1000);

  Serial.println("Sentido Anti-horario... "); 
  digitalWrite(pinoA, LOW);
  digitalWrite(pinoA2, LOW);
  
  for( int v = 0; v <= 255; v += 5){
    analogWrite(pinoB, v);
    analogWrite(pinoB2, v);  
    delay(30);
  }
  delay(2000);

  Serial.println("Parando...");
  digitalWrite(pinoA, LOW);
  digitalWrite(pinoB, LOW);
  digitalWrite(pinoA2, LOW);
  digitalWrite(pinoB2, LOW);
  delay(1000);
}
