print("(1 - Gasolina) ")
print("(2 - Etanol)")
print("(3 - Diesel)\n")
fuel = float(input("Qual o tipo de combustivel? "))
fuelq = float(input("Quantos litros foram gastos? "))
distance = float(input("Qual foi a distanceia percorrida? "))

expected_consumption = None
real_consumption = distance / fuelq

match fuel:
    case 1:
        expected_consumption = 12;
    case 1:
        expected_consumption = 8.5;
    case 1:
        expected_consumption = 15;
    case _:
        expected_consumption = 0
        print("Combustivel invalido.")

ratio = real_consumption / expected_consumption

match True:
    case ratio if ratio >= 1.1:
        print("Excelente --- acima do esperado.")
        print("LIBERADO PARA FROTA")
    case ratio if ratio >= 0.9:
        print("Regular --- dentro do esperado")
        print("LIBERADO PARA FROTA")
    case ratio if ratio >= 0.7:
        print("Ruim --- abaixo do esperado")
        print("ENCAMINHADO PARA REVISAO")
    case _:
        print("Critico --- veiculo requer manutencao.")
        print("ENCAMINHADO PARA REVISAO")

print(f"Consumo do veiculo: {real_consumption:g}") 
print(f"Consumo esperado: {expected_consumption:g}")
