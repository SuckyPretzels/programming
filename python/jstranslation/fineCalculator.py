name = input("What is the name of the driver? ")
maxspd = float(input("What was the speed limit of the roadway? "))
regspd = float(input("What was the registered speed of the vehicle? "))
fine = None
excspd = regspd - maxspd

if excspd < 0:
    print("Driver under speed limit.")
elif excspd > 0 and excspd <= 10:
    fine = "Light fine of $50" 
elif excspd >= 11 and excspd <= 20:
    fine = "Medium fine of $100"
elif excspd > 20:
    fine = "Serious fine of $200"

if fine:
    print(f"Name of driver: {name}") 
    print(f"Speed Limit: {maxspd:g}") 
    print(f"Registered Speed:  {regspd:g}") 
    print(f"Type of fine: {fine}") 
