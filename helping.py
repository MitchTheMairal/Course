vardas = input("Koks tavo vardas? ")

is_Us = vardas.find('us') != -1
is_As = vardas.find('as') != -1
is_E = vardas.find('ė') != -1
is_SYS = vardas.find('ys') != -1


if is_Us:
    print("Labas, " + vardas.replace('us','au'))
if is_As:
    print("Labas, " + vardas.replace('as','ai'))
if is_E:
    print("Labas, " + vardas.replace('ė','e'))
if is_SYS:
    print("Labas, " + vardas.replace('sys','sy'))