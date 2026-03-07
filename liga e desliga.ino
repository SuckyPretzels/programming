const int ledi = 13;
bool led = false;
String mensagem = "";

void setup() {
  
  pinMode(ledi, OUTPUT);
  Serial.begin(9600);
  delay(1000);
  Serial.println("\nDigite algo e aperte RET para eu compreender :)");
}

void loop() {
  /*
  digitalWrite(ledi, HIGH);
  Serial.println("LED ligado :)");
  delay(50);

  digitalWrite(ledi, LOW);
  Serial.println("LED desligado :(");
  delay(3000);
  */

  if (Serial.available() > 0) {
    mensagem = Serial.readStringUntil("\n");
    Serial.println(mensagem);
    mensagem.trim();
    if (mensagem == "1") {
      led = true;
    } else if (mensagem == "0") {
      led = false;
    }
    
    if (led == true) {
      digitalWrite(ledi, HIGH);
      Serial.println("LED ligado :)");
      } else if (led == false) {
      digitalWrite(ledi, LOW);
      Serial.println("LED desligado :(");
    }
  }     
}
