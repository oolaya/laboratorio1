import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogsComponent } from './dialogs/dialogs.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //=> obtenemos el objeto de manera generica. 
  @ViewChild('content') con: ElementRef;
  thecontents = { something: '' };
  //=> Definimos varibles global para asignar la fuente. 
  fuente: any[];
  name = '';
  //=> definimos un array auxiliar que permite manipular en el flujo.
  arrayAuxiliar = [];
  //=> Varable golbal del total de la entropia de la fuente. 
  entropiaT: any;
  //=> entropia del mensaje que se ingresa. 
  entropiaTmsn: any;
  //=> Resultado ecuacion de Kfraft 
  kraft: any;
  //=> deninimo dos varibles con el final de la reduccion. 
  crfinal1: any;
  crfinal2: any;
  //=> Bandera para mostrar o no contenido. 
  resultados: boolean = false; ç

  //=> Arreglo de la fuente seleccionada.
  arrayFuenteSelected: any = [];

  //=> Variable de cambio de fuente.
  origenFuente = "Fuente total."
  // global final 
  globalArray: any = [];
  temArray: any = [];

  constructor(public dialog: MatDialog) {
    this.codigoFuente();
  }



  /**
   * Metodo que permite crear el codigo fuente con las probabilidades preestablecidas.
   * HRincon && OOLaya
   */
  codigoFuente() {
    this.fuente = [
      { valor: "31", simbolo: "", pro: 0.202 },
      { valor: "32", simbolo: " ", pro: 0.412 },
      { valor: "33", simbolo: "!", pro: 0.002 },
      { valor: "34", simbolo: "\"", pro: 0.001 },
      { valor: "35", simbolo: "#", pro: 0.0521 },
      { valor: "36", simbolo: "$", pro: 0.0621 },
      { valor: "37", simbolo: "%", pro: 0.0541 },
      { valor: "38", simbolo: "&", pro: 0.0751 },
      { valor: "39", simbolo: "'", pro: 0.0151 },
      { valor: "40", simbolo: "(", pro: 0.0101 },
      { valor: "41", simbolo: ")", pro: 0.0101 },
      { valor: "42", simbolo: "*", pro: 0.0821 },
      { valor: "43", simbolo: "+", pro: 0.0811 },
      { valor: "44", simbolo: ",", pro: 0.0621 },
      { valor: "45", simbolo: "-", pro: 0.0731 },
      { valor: "46", simbolo: ".", pro: 0.0771 },
      { valor: "47", simbolo: "/", pro: 0.0221 },
      { valor: "48", simbolo: "0", pro: 0.0451 },
      { valor: "49", simbolo: "1", pro: 0.0416 },
      { valor: "50", simbolo: "2", pro: 0.0415 },
      { valor: "51", simbolo: "3", pro: 0.0447 },
      { valor: "52", simbolo: "4", pro: 0.0424 },
      { valor: "53", simbolo: "5", pro: 0.0441 },
      { valor: "54", simbolo: "6", pro: 0.0451 },
      { valor: "55", simbolo: "7", pro: 0.0411 },
      { valor: "56", simbolo: "8", pro: 0.0451 },
      { valor: "57", simbolo: "9", pro: 0.0421 },
      { valor: "58", simbolo: ":", pro: 0.0221 },
      { valor: "59", simbolo: ";", pro: 0.0241 },
      { valor: "60", simbolo: "<", pro: 0.0041 },
      { valor: "61", simbolo: "=", pro: 0.0901 },
      { valor: "62", simbolo: ">", pro: 0.0071 },
      { valor: "63", simbolo: "?", pro: 0.0961 },
      { valor: "64", simbolo: "@", pro: 0.0201 },
      { valor: "65", simbolo: "A", pro: 0.553 },
      { valor: "66", simbolo: "B", pro: 0.552 },
      { valor: "67", simbolo: "C", pro: 0.0568 },
      { valor: "68", simbolo: "D", pro: 0.0596 },
      { valor: "69", simbolo: "E", pro: 0.568 },
      { valor: "70", simbolo: "F", pro: 0.0569 },
      { valor: "71", simbolo: "G", pro: 0.0123 },
      { valor: "72", simbolo: "H", pro: 0.0570 },
      { valor: "73", simbolo: "I", pro: 0.0525 },
      { valor: "74", simbolo: "J", pro: 0.0544 },
      { valor: "75", simbolo: "K", pro: 0.0502 },
      { valor: "76", simbolo: "L", pro: 0.0997 },
      { valor: "77", simbolo: "M", pro: 0.715 },
      { valor: "78", simbolo: "N", pro: 0.0871 },
      { valor: "79", simbolo: "O", pro: 0.0798 },
      { valor: "80", simbolo: "P", pro: 0.0751 },
      { valor: "81", simbolo: "Q", pro: 0.0588 },
      { valor: "82", simbolo: "R", pro: 0.0787 },
      { valor: "83", simbolo: "S", pro: 0.0798 },
      { valor: "84", simbolo: "T", pro: 0.0863 },
      { valor: "85", simbolo: "U", pro: 0.0893 },
      { valor: "86", simbolo: "V", pro: 0.0790 },
      { valor: "87", simbolo: "W", pro: 0.0121 },
      { valor: "88", simbolo: "X", pro: 0.0622 },
      { valor: "89", simbolo: "Y", pro: 0.0590 },
      { valor: "90", simbolo: "Z", pro: 0.0522 },
      { valor: "91", simbolo: "[", pro: 0.0215 },
      { valor: "92", simbolo: "\\", pro: 0.0215 },
      { valor: "93", simbolo: "]", pro: 0.0212 },
      { valor: "94", simbolo: "^", pro: 0.0214 },
      { valor: "95", simbolo: "_", pro: 0.0215 },
      { valor: "96", simbolo: "`", pro: 0.0212 },
      { valor: "97", simbolo: "a", pro: 0.952 },
      { valor: "98", simbolo: "b", pro: 0.0665 },
      { valor: "99", simbolo: "c", pro: 0.0667 },
      { valor: "100", simbolo: "d", pro: 0.0673 },
      { valor: "101", simbolo: "e", pro: 0.0850 },
      { valor: "102", simbolo: "f", pro: 0.0575 },
      { valor: "103", simbolo: "g", pro: 0.0650 },
      { valor: "104", simbolo: "h", pro: 0.0552 },
      { valor: "105", simbolo: "i", pro: 0.0635 },
      { valor: "106", simbolo: "j", pro: 0.0566 },
      { valor: "107", simbolo: "k", pro: 0.0952 },
      { valor: "108", simbolo: "l", pro: 0.0841 },
      { valor: "109", simbolo: "m", pro: 0.775 },
      { valor: "110", simbolo: "n", pro: 0.0762 },
      { valor: "111", simbolo: "o", pro: 0.0961 },
      { valor: "112", simbolo: "p", pro: 0.0664 },
      { valor: "113", simbolo: "q", pro: 0.0850 },
      { valor: "114", simbolo: "r", pro: 0.795 },
      { valor: "115", simbolo: "s", pro: 0.774 },
      { valor: "116", simbolo: "t", pro: 0.0885 },
      { valor: "117", simbolo: "u", pro: 0.0856 },
      { valor: "118", simbolo: "v", pro: 0.0751 },
      { valor: "119", simbolo: "w", pro: 0.0431 },
      { valor: "120", simbolo: "x", pro: 0.0341 },
      { valor: "121", simbolo: "y", pro: 0.0125 },
      { valor: "122", simbolo: "z", pro: 0.0475 },
      { valor: "123", simbolo: "{", pro: 0.0615 },
      { valor: "124", simbolo: "|", pro: 0.0515 },
      { valor: "125", simbolo: "}", pro: 0.0615 },
      { valor: "126", simbolo: "~", pro: 0.0515 },
      { valor: "127", simbolo: "", pro: 0.0615 },
    ];
  }

  /**
   * Permite abrir el alert indicando que hay error cuando viene en blanco. 
   */
  openDialog() {
    const dialogRef = this.dialog.open(DialogsComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  /**
   * Metodo Onchange del textarea. 
   * HRincon && OOLaya
   */
  dosomething() {
    //=> Incializamo siempre el array Auxiliar, este metodo es un on change. 
    this.arrayAuxiliar = [];
    this.arrayFuenteSelected = [];

    //=> Con ayuda del objeto nativo de angular capturamos el contenido de la caja.
    let msn = this.con.nativeElement.value;
    //=> Validamos que el cambio no se sin contenido alguno. 
    if (msn === "") {
      this.openDialog();
      this.clearAll();
    } else {
      //=> Realizamos la particion del mensaje para volverlo un arreglo independiente por caracter.
      var array = msn.split('');
      //=> Realizamos un forEach para recorrer el objeto que acabamos de generar en el paso anterior.
      array.forEach(element => {
        //=> Generamos una busqueda en la fuente original del caracter ingresado.
        let caracter = this.fuente.filter(d => d.simbolo == element);
        //=> Validamos la existencia del caracter sino lo insertamos y le asignamos una probabilidad. 
        if (caracter.length > 0) {
          //=> Lo agragamos al arreglo de la fuente que selecciono. 
          this.arrayFuenteSelected.push(caracter[0]);
          this.addToArray(caracter[0]);
        } else {
          //=> Se realiza la insercion del nuevo codigo, se obtine por tabla ascii el valor definido par aposteriormente calular su valor en binario.
          let objTem = { valor: element.charCodeAt(0), simbolo: element, pro: 0.02 };
          //=> Lo agragamos al arreglo de la fuente que selecciono. 
          this.arrayFuenteSelected.push(objTem);
          this.fuente.push(objTem);
          this.addToArray(objTem);
        }
      });
      this.entropiaT = this.calcularEntropiaDelaFuente(this.fuente);
      this.entropiaTmsn = this.calcularEntropiaMensaje(this.arrayAuxiliar).toString();
      this.kraft = this.calcularKraft(this.arrayAuxiliar);
      this.ordenarArray(this.arrayAuxiliar);
      this.compactoHuffman(this.fuente);
      setTimeout(() => {
        let fin = this.globalArray.length;
        this.crfinal1 = (this.globalArray[fin - 1][0].pro / 10);
        this.crfinal2 = (this.globalArray[fin - 1][1].pro / 10);

      }, 700);
    }
  }

  /**
   * Metodo que permite realizar el calcula de longitud del caractar en binario, longitud media por caracter, caculos de logaritmia etc. 
   * @param caracter Recibe el objeto definido para realizar calculos basicos e insertar en el array global. 
   * HRincon && OOlaya. 
   */
  private addToArray(caracter: any): void {
    let binario = parseInt(caracter.valor).toString(2);
    let probabilidad = (caracter.pro / 100);
    let log2 = Math.log2((1 / probabilidad));
    let H = (probabilidad * log2);
    this.arrayAuxiliar.push({ simbolo: caracter.simbolo, binario: binario, longitudB: binario.length, entropia: H, longitudMC: log2, probabilidad: probabilidad });
  }

  /**
   * Metodo que permite calcular la entropia del menjase en bit. 
   * @param mensaje Recibe el arreglo del mensaje con los calculos basicos definidos. 
   * HRincon && OOlaya. 
   */
  private calcularEntropiaMensaje(mensaje: any[]): number {
    let sumar: number = 0;
    mensaje.forEach(element => {
      sumar = (sumar + element.entropia);
    });
    return sumar;
  }

  /**
   * Metodo que permite calcular la entropia de una fuente. 
   * @param array Arra del calculo de la entropia.
   * HRincon && OOLaya
   */
  private calcularEntropiaDelaFuente(array): number {
    let H: number = 0;
    array.forEach(element => {
      //=> Calculamos la probabilidad toda vez que en el arreglo definido esta esta siendo usada en porcentaje dividimos por 100. 
      let probabilidad = (element.pro / 100);
      //=> Hacemos la divicion de la unidad entre la probabilidad que posteriormente sera lo que se ejecute en el log en base 2.
      let a = (1 / probabilidad);
      //=> Realizamos la ejecucion del Log2 de uno entre la probabilidad del caracater.
      let log2 = Math.log2(a);
      //=> Finalmente realizamos la multiplicacion de la probabilidad con con el resultado del log2 de uno entre la probabilidad. 
      let HS = probabilidad * log2;
      // Realizamos el acumulado para el calculo total de la entropia de la fuente general. 
      H = (H + HS);
    });
    return H;
  }

  /**
   * Metodo que calcula la ecuacion de kraft.
   * @param mensaje Recibe el arreglo del mensaje para calcular la ecuacion de Kraft
   * HRincon && OOLaya
   */
  private calcularKraft(mensaje: any[]): number {
    let K: number = 0;
    let lgTemp = 0;
    let exponente = 0;
    mensaje.forEach(ca => {
      if (lgTemp != ca.longitudB) {
        exponente = Math.pow(2, -ca.longitudB);
        lgTemp = ca.longitudB
        K = K + exponente;
      } else {
        K = K + exponente
      }
    });
    return K;
  }

  /**
   * Metodo que permite ordenar primer modelo.
   * @param arraySort Array para organizar asc
   * HRincon && OOLaya
   */
  private ordenarArray(arraySort: any[]): any {
    arraySort.sort(function (a, b) {
      if (a.probabilidad > b.probabilidad) {
        return -1;
      }
      if (a.probabilidad < b.probabilidad) {
        return 1;
      }
      return 0;
    });
    return arraySort;
  }


  /**
   * Metodo que realiza la reduccion de Hoftman.
   * HRincon && OOLaya
   */
  private compactoHuffman(fuente) {
    //=> Obtenemos el arrego ordenado de manera desendente del codigo fuente. 
    let arrayHuffman = this.ordenarArrayHuffman(fuente);
    //=> declaramos una variable uxiliar que llamaremos moviento.
    let movimiento = [];
    //=> inicializamos la varible global del array la cual usamos despues para pintar el contenido en HTML, siempre la limpiamos cuando se llame este metodo.
    this.globalArray = [];
    //=> calculamos el valor de de la x de manera dinamica, 
    //=> sabiendo que x es el numero de iteraciones que debera hacer el programa. 
    let x = arrayHuffman.length - 1;
    //=> ponemos nuestra reduccion en un siclo de tipo while, toda vez que es la unica extrucctua valida y optima para este ejercicio. 
    while (x >= 0) {
      //=> Validamos que la x sea igual a uno 
      if (x == 1) {//=> si ingresa sera su penultima iteracion, entonces solo aculamos en el arrayglobal la variable temporal y auxiliar del movimiento y rompomes el ciclo con eun brake;
        this.globalArray.push(movimiento);
        //=> Como sabemos que es la ultima vez que ingresara al ciclo entonces activamos la bandera para que muestre los resultados totales. 
        this.resultados = true;
        break;
      } else {// en caso que no se a igual a uno eso significa que aun esta realizando ciclos pendientes.
        if (x == arrayHuffman.length - 1) {//=> Preguntamos si la x que es el total de iteraciones es igual al total es decir si esta es la primera vez que ingresa si se cumple.
          //=> agregamos el tatal de la fuenta como historico para mostrarlo despues en el HTML.
          this.globalArray.push(arrayHuffman);
          //=> Utilizamos variables temporales para obtener las dos ultimas posiciones, con las que realizaremos las operaciones de suma para la reduccion de la fuente. 
          let obj1 = arrayHuffman[arrayHuffman.length - 1];
          let obj2 = arrayHuffman[arrayHuffman.length - 2];
          //=> enviamos los dos objetos al metodo que realiza la suma de los dos factores a reducir. 
          let pro = this.metodoHuffman(obj1.pro, obj2.pro);
          //=> ahora realizamos la exclusion de los dos ultimos objetos que se redujeron por primer vez. 
          var temMov1: any = Object.assign([], new Object, arrayHuffman);
          temMov1.splice((arrayHuffman.length - 1), 1);
          temMov1.splice((arrayHuffman.length - 2), 1);
          //=> una vez elimanados los dos ultimos lo que hacemos es agregar el nuevo que se acaba de crear. 
          temMov1.push({ valor: "", simbolo: "", pro: pro });
          //=> Enviamos al algoritmo de ordenamiento para iniciar el nuevo ciclo. 
          movimiento = this.ordenarArrayHuffman(temMov1);
        } else {//=> Siempre que no sea la primera o la ultima vez ingresara a esta secciòn. 
          //=> Agragamos el ultimo movimiento que teniamos en memoria. 
          this.globalArray.push(movimiento);
          //=> obtenemos los dos objetos de las ultimas posiciones. 
          let obj1 = movimiento[x];
          let obj2 = movimiento[x - 1];
          //=> enviamos a la sumatiria. 
          let pro = this.metodoHuffman(obj1.pro, obj2.pro);
          //=> Removemos los objetos del acumulado. 
          var temMov: any = Object.assign([], new Object, movimiento);;
          temMov.splice(x, 1);
          temMov.splice((x - 1), 1);
          //=> Finalmente terminamos asignando el nuevo array al movimiento. 
          temMov.push({ valor: "", simbolo: "", pro: pro });
          //=> Por ultimo reordenamos. 
          movimiento = this.ordenarArrayHuffman(temMov);
        }
      }
      //=> Contamos hacia atras para lograr llegar a al ultima iteracion. 
      x--;
    }
  }

  /**
   * Metodo que suma las probabilidades.
   * @param obj1 obj Para la suma
   * @param obj2 obs 2 de la suma 
   * HRincon && OOLaya
   */
  private metodoHuffman(valor1, valor2): any {
    return (valor1 + valor2);
  }

  /**
   * Metodo que permite organizar los arreglos. 
   * @param arraySort Array a organizar.
   * HRincon && OOLaya
   */
  private ordenarArrayHuffman(arraySort: any[]): Array<any> {
    arraySort.sort(function (a, b) {
      if (a.pro > b.pro) {
        return -1;
      }
      if (a.pro < b.pro) {
        return 1;
      }
      return 0;
    });
    return arraySort;
  }

  /**
   * Metodo que permite limpiar todas las variables globlales si la entrada del mensaje es igual a vacio. 
   * HRincon && OOLaya
   */
  clearAll() {
    this.crfinal1 = null;
    this.crfinal2 = null;
    this.globalArray = [];
    this.entropiaT = null;
    this.entropiaTmsn = null;
    this.kraft = null;
    this.resultados = false;
  }

  /**
   * Metodo que permite cargar la fuente con el origen del mesaje...
   * HRincon && OOlaya
   */
  calcularCompactoMsn() {
    this.compactoHuffman(this.arrayFuenteSelected);
  }

  /**
   * Metodo que permite establecer el tipo de fuente que se esta evaluando. 
   * @param tipo Tipo de fuente cargada para el array.
   * HRincon && OOlaya. 
   */
  changeFuente(tipo) {
    this.origenFuente = tipo;
  }

}


