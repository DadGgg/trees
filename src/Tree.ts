export default class Tree {
    size: number;
    color: string;
    strain: string;
    branches: Branch[];

    constructor(size: number, color: string, strain: string) {
        this.size = size;
        this.color = color;
        this.strain = strain;
        this.branches = [];
    }

    grow(food: number, light: number) {
        if (food + light >= 3) {
            this.branches.push(new Branch());
            this.branches.forEach((branch) => {
                branch.grow(food, light);
            });
        }    
        
    }

}
class Branch {
    size: number;
    buds: number;
    branches: Branch[];
    constructor() {
        this.size = 1;
        this.buds = 0;
        this.branches = [];
    }
    grow(food: number, light: number) {
        if (food + light >= 3) {
            this.branches.push(new Branch());
            this.branches.forEach((branch) => {
                branch.grow(food/2, light/2);
            });
            this.size++;
        }    
        if (food + light >= 10) {
            this.buds++;
        } 
    }
}