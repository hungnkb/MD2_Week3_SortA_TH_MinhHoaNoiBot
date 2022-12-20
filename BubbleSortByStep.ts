export class BubbleSortByStep {
    static numbers: number[] = [8, 3, 6, 1, 4, 10, 2, 50];

    public static bubbleSortByStep(list: number[]): void {
        let temp = 0;
        console.log('Start with this list: ' + list)
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list.length - i - 1; j++) {
                if (list[j] > list[j + 1]) {
                    temp = list[j];
                    list[j] = list [j+1];
                    list[j+1] = temp;
                    console.log('Swap ' + list[j] + ' with ' + list[j+1] )
                    console.log(list)
                }
            }
        }
        console.log('Final List: ' + list)
    }
}