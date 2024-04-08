#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
int static compare (const void* first, const void* second)
{
    if (*(int*)first > *(int*)second)
        return 1;
    else if (*(int*)first < *(int*)second)
        return -1;
    else
        return 0;
}
int main(){
    int n;
    int sum = 0;
    scanf("%d",&n);
    int arr[n];
    int num[4001];
    memset(num,0,sizeof(num));
    for (int i = 0;i < n;i++){
        scanf("%d",&arr[i]);
        sum += arr[i];
        num[i]++;
    }
    qsort(arr,n,sizeof(int),compare);
    int max = 0;
    for (int i = 0; i <= 4000; i++){
        if(num[i] > max)
            max = num[i];
    }
    int choi[4001];
    int index = 0;
    memset(choi,0,sizeof(choi));
    for (int i = 0; i <= 4000; i++){
        if(num[i] == max){
            choi[index++]++;
        }
    }
    float a = sum/n;
    float rounda = roundf(a*10)/10;
    int b, c, d;
    b = n/2;
    c = choi[index-2];
    d = arr[n-1] - arr[0];



    printf("%.0f\n%d\n%d\n%d\n", rounda,b,c,d);
    return 0;
}