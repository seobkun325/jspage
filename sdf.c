#include <stdio.h>
#include <string.h>

int main() {
    char *someone[] = {"현성", "대희", "경환", "민수", "진명"};
    char joiner[10]; 
    int result = 0;

    while (1) {
        if (scanf("%s", joiner) == EOF)
            break;
        for (int i = 0; i < sizeof(someone) / sizeof(someone[0]); i++) {
            if (strcmp(someone[i], joiner) == 0) {
                result++;
                break;             
                }
        }
    }
    printf("%d", result);
    return 0;
}
