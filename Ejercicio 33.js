//Ingresar 100 números enteros y contar los positivos, los negativos y los ceros ingresados.

int num;
int contPos = 0;
int contNeg = 0;
int contCero = 0;

int main(){
    int i;
    for (i = 0; i < 100; i++)
    {
        printf("Ingrese el numero: ");
        scanf("%d", &num);

        if (num > 0)
        {
            contPos++;
        } 
        else if(num < 0)
        {
            contNeg++;
        }
        else
        {
            contCero++;
        }
    }
    
    printf("La cantidad de positivos es: %d\n", contPos);
    printf("La cantidad de negativos es: %d\n", contNeg);
    printf("La cantidad de 0 es: %d", contCero);

    return 0;
} 
