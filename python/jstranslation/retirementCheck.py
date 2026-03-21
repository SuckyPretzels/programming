try:
    age = input("How old are you? ").strip()
    age = int(age)
    if age >= 65:
        print("You can retire :)")
    elif age < 60:
        print("You can't retire :(")
    else:
        try:
            years = input("How many years have you worked for? ").strip()
            years = int(years)
            if age >= 60 and years >= 30:
                print("You can retire :)")
            else:
                print("You can't retire :(")
        except ValueError:
            print("Please insert a valid number.")
except ValueError:
    print("Please insert a valid number.")
