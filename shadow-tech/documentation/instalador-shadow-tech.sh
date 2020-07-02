# ! /bin/bash

cd /home

echo "Bem vindo ao instalador Shadow Tech."
echo ""
    read -r -p "${1:-Gostaria de continuar?} [Y/N] " response
        case $response in
        s|S|sim|y|yes|Y)
            echo "Iniciando instalação..."
                ;;
        n|nao|N|not)
            echo "Tudo bem, nos vemos em breve. Tchau!"
            exit
            break
                ;;
                
        esac

        read -r -p "${1:-Gostaria de fazer atualizações do sistema e instalar dependencias da aplicação?} [Y/N] " response1
        case $response1 in
        s|S|sim|y|yes|Y)
            echo "Iniciando atualizações..."
            echo ""
            sudo apt update && sudo apt upgrade
            which java | grep -q /usr/bin/java
            if [ $? = 0 ]
                then java --version
            else
                sudo apt install openjdk-11-jre -y
            fi
                ;;
        n|nao|N|not)
            echo "Tudo bem, vamos continuar assim mesmo!"
            echo ""
                ;;
                
        esac

            mkdir -p "instalador-shadow-tech"
            cd "instalador-shadow-tech"
	    sudo rm -rf shadowtech-script
            sudo git clone https://github.com/reisrb/shadowtech-script.git
            sudo cp /home/instalador-shadow-tech/shadowtech-script/teste-oshi/target/teste-oshi-1.0-SNAPSHOT-jar-with-dependencies.jar shadowtech.jar 
            sudo chmod +x shadowtech.jar

        read -r -p "${1:-Gostaria de adicionar a aplicação a área de trabalho?} [Y/N] " response
                case $response in
                s|S|sim|y|yes|Y)
                    echo "Aplicação adicionada a área de trabalho."
                    cp -p shadowtech.jar /home/$USER/Desktop
                        ;;
                n|nao|N|not)
                    echo "Tudo bem, vamos continuar assim mesmo!"
                        ;;
                        
                esac

        read -r -p "${1:-Gostaria de executar a aplicação?} [Y/N] " response2
                case $response2 in
                s|S|sim|y|yes|Y)
                    echo "Executando aplicação..."
                    echo ""
                    echo "Instalação concluída. Muito obrigado!"
                        ;;
                n|nao|N|not)
                    echo "Instalação concluída. Muito obrigado!"
                    echo ""
                    exit
                    break
                        ;;
                        
                esac

        which java | grep -q /usr/bin/java
        if [ $? = 0 ]
            then java -jar shadowtech.jar
        else "Erro de execução"

        fi
