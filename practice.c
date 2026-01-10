kkk#include <stdio.h>
#include <math.h>

int main(){
    int num, result;
    printf("Enter the number: ");
    scanf("%d", &num);
    result = pow(num,2);
    printf("The square of %d is %d",num,result);
    return 0;
}
