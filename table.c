#include <stdio.h>

int main() {
    int n, i;

    for (n = 2; n <= 12; n++) {
        printf("Multiplication Table of %d\n", n);
        printf("--------------------------\n");
        for (i = 1; i <= 12; i++) {
            printf("%d * %d = %d\n", n, i, n * i);
        }
        printf("\n");
    }

    return 0;
}
