nota1 = float(input("Qual sua nota na AV1? "))
nota2 = float(input("Qual sua nota na AV2? "))
nota_parcial = (nota1 + nota2) / 2

if nota_parcial >= 4:
    nota3 = float(input("Qual sua nota na AV3? "))
    nota_final = (nota_parcial + nota3) / 2
    if nota_final >= 5:
        frequencia = float(input("Qual sua frequencia? (somente o numero) "))
        frequencia = frequencia / 10
        if frequencia >= 0.75:
            print("Voce foi aprovado :)")
        else:
            print("Voce foi reprovado por frequencia.")
    else:
        print("Voce foi reprovado na nota final.")
else:
    print("Voce foi reprovado na nota parcial.")
