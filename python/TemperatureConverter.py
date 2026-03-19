
print("This program will convert Celcius to Fahrenheit and vice versa.")
t = input("Which would you like to convert? (C of F) ").strip().lower()
match t:
    case "c":
       c = input("What is your temperature in Celsius? ")
       try: 
           c = float(c)
           f = ((c * 9) / 5) + 32
           print(f"Your temperature in Fahrenheit is {f:g}°")
       except ValueError:
           print("This is not a number.")
    case "f": 
        f = input("What is your temperature in Fahrenheit? ")
        try:
            f = float(f)
            c = ((f - 32) * 5) / 9
            print(f"Your temperature in Celsius is {c:g}°")
        except ValueError:
            print("This is not a number.")
    case _:
        print("This is not a valid temperature type.")
