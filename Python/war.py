from random import shuffle

# variable form creating Cards
SUITE = 'H D S C'.split()
RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()

mycards = [(s,r) for s in SUITE for r in RANKS]
print(mycards)
print(len(mycards))

class Deck:
    def __init__(self):
        print("Creating Deck")
        self.allcards = [(s,r) for s in SUITE for r in RANKS ]

    def shuffle(self):
        print("Shuffling Deck")
        shuffle(self.allcards)

    def split_in_half(self):
        print("Splitting Deck")
        return (self.allcards[:26], self.allcards[26:])

class Hand:
    def __init__(self,cards):
        self.cards = cards

    def __str__(self):
        return "Contains {} cards".format(len(self.cards))
