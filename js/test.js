const atTheOldToad = {
    potions: [
        { name: 'Speed potion', price: 460 },
        { name: 'Dragon breath', price: 780 },
        { name: 'Stone skin', price: 520 },
    ],
    // Change code below this line
    getPotions() {
        return [...this.potions];
    },
    addPotion(newPotion) {
        for (const potion of this.potions) {
            if (potion.name === newPotion.name)
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
        this.potions.push(newPotion);
    },
    removePotion(potionName) {
        let potionIndex = -1;
        for (let i = 0; i < this.potions.length; i += 1) {
            if (this.potions[i].name === potionName) potionIndex = i;
        }
        if (potionIndex === -1) {
            return `Potion ${potionName} is not in inventory!`;
        }
        this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
        //     let potionIndex = -1;
        //     for (let i = 0; i < this.potions.length; i += 1) {
        //         if (this.potions[i].name === oldName) potionIndex = i;
        //     }
        //     if (potionIndex === -1) {
        //         return `Potion ${oldName} is not in inventory!`;
        //     }

        //     this.potions[potionIndex].name = newName;
        // },
        let potionIndex = false;
        for (const pot of this.potions) {
            if (pot.name === oldName) {
                pot.name = newName;
                potionIndex = true;
            }
        }
        if (!potionIndex) return `Potion ${oldName} is not in inventory!`;
    },
};

atTheOldToad.updatePotionName('Dragon bdeath', 'Polymorth');
console.log(atTheOldToad.potions);
