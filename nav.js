'use strict'
            let src = 'navigation.txt';

            function loadData() {
                //Anfrage-Objekt erzeugen 
                let xhr = new XMLHttpRequest(); 
                //anfragen Methode GET :  Datei oder Web-Url
                //open ist eine Metode des Verbindungsobjekts
                xhr.open('GET',src);

                /* xhr.responseType ist optional - häufigste Formen
                - text(default), 
                - json (wird automatisch geparst),
                - document(für xml) 
                */
                //xhr.responseType = 'text';
                //Bein Ereignis laden soll eine (anonyme) function ausgeführt werden
                xhr.onload = () => {
                    //Wenn das Ziel gefunden wurde (status 200)
                    //wird dessen Inhalt(responseText) in das Element 
                    //mit der id test hineingeschrieben
                    if (xhr.status == 200) {
                        document.getElementById('nav-script').innerHTML = xhr.response;
                    }
                }
                //send ist eine Metode des Verbindungsobjekts
                xhr.send();
            }

            //function auslösen beim laden der Seite
            window.onload = function() {
                loadData();
                loadformData();
            };
            
                        let form_src = 'form.txt';

            function loadformData() {
                //Anfrage-Objekt erzeugen 
                let xhr = new XMLHttpRequest(); 
                //anfragen Methode GET :  Datei oder Web-Url
                //open ist eine Metode des Verbindungsobjekts
                xhr.open('GET',form_src);

                /* xhr.responseType ist optional - häufigste Formen
                - text(default), 
                - json (wird automatisch geparst),
                - document(für xml) 
                */
                //xhr.responseType = 'text';
                //Bein Ereignis laden soll eine (anonyme) function ausgeführt werden
                xhr.onload = () => {
                    //Wenn das Ziel gefunden wurde (status 200)
                    //wird dessen Inhalt(responseText) in das Element 
                    //mit der id test hineingeschrieben
                    if (xhr.status == 200) {
                        document.getElementById('mc_embed_shell').innerHTML = xhr.response;
                    }
                }
                //send ist eine Metode des Verbindungsobjekts
                xhr.send();
            }

            //function auslösen beim laden der Seite
            //window.onload = loadformData;
            