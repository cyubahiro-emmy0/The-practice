#include <stdio.h>


void square (int x , int exp, int answer){
    for(int i = 1; i <= exp; i++) {
        answer *= x;
    }
    printf("%d",answer);
}


int main(){
    int x, exp,answer=1;
    printf("Enter a number: ");
    scanf("%d",&x);
    printf("Enter your exponent: ");
    scanf("%d", &exp);
    square(x,exp,answer);
    return 0;
}




