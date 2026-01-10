#include <stdio.h>

int main(){
    char text[200];
    int count = 0;

    printf("Enter text: ");
    fgets(text, sizeof(text),stdin);

    while (text[count] != '\0') {
        count++;
    }

    if (count > 0 && text[count - 1] == '\n') {
        count--;
    }

    printf("Number of characters: %d\n", count);

    return 0;
}
