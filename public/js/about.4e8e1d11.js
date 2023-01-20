"use strict";(self["webpackChunkmevn_1_udemy_frontend"]=self["webpackChunkmevn_1_udemy_frontend"]||[]).push([[443],{5399:function(t,e,o){o.r(e),o.d(e,{default:function(){return c}});var s=function(){var t=this;t._self._c;return t._m(0)},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],a=o(1001),i={},r=(0,a.Z)(i,s,n,!1,null,null,null),c=r.exports},9681:function(t,e,o){o.r(e),o.d(e,{default:function(){return l}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.mensaje.texto)+" ")]),t.editar?e("form",{on:{submit:function(e){return e.preventDefault(),t.editarNota(t.notaEditar)}}},[e("h3",[t._v("Modificar nota")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.notaEditar.nombre,expression:"notaEditar.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre"},domProps:{value:t.notaEditar.nombre},on:{input:function(e){e.target.composing||t.$set(t.notaEditar,"nombre",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.notaEditar.descripcion,expression:"notaEditar.descripcion"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Descripcion"},domProps:{value:t.notaEditar.descripcion},on:{input:function(e){e.target.composing||t.$set(t.notaEditar,"descripcion",e.target.value)}}}),e("button",{staticClass:"btn btn-outline-warning my-2 me-2",attrs:{type:"submit"}},[t._v("Guardar cambios")]),e("button",{staticClass:"btn btn-outline-secondary my-2",on:{click:function(e){t.editar=!1}}},[t._v("Cancelar")])]):t._e(),t.editar?t._e():e("form",{on:{submit:function(e){return e.preventDefault(),t.agregarNota()}}},[e("h3",[t._v("Agregar nueva nota")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.nombre,expression:"nota.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre"},domProps:{value:t.nota.nombre},on:{input:function(e){e.target.composing||t.$set(t.nota,"nombre",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.descripcion,expression:"nota.descripcion"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Descripcion"},domProps:{value:t.nota.descripcion},on:{input:function(e){e.target.composing||t.$set(t.nota,"descripcion",e.target.value)}}}),e("button",{staticClass:"btn btn-outline-success my-2",attrs:{type:"submit"}},[t._v("Agregar")])]),e("table",{staticClass:"table mt-5"},[t._m(0),e("tbody",t._l(t.notas,(function(o,s){return e("tr",{key:s},[e("th",{attrs:{scope:"row"}},[t._v(t._s(o._id))]),e("td",[t._v(t._s(o.nombre))]),e("td",[t._v(t._s(o.descripcion))]),e("td",[e("button",{staticClass:"btn btn-outline-warning me-2",on:{click:function(e){return t.activarEdicion(o._id)}}},[t._v("Editar")]),e("button",{staticClass:"btn btn-outline-danger",on:{click:function(e){return t.eliminarNota(o._id)}}},[t._v("Eliminar")])])])})),0)])],1)},n=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("ID")]),e("th",{attrs:{scope:"col"}},[t._v("Nombre")]),e("th",{attrs:{scope:"col"}},[t._v("Descripcion")]),e("th",{attrs:{scope:"col"}},[t._v("Acciones")])])])}],a=(o(7658),{data(){return{notas:[],dismissSecs:2,dismissCountDown:0,mensaje:{color:"",texto:""},nota:{nombre:"",descripcion:""},editar:!1,notaEditar:{nombre:"",descripcion:""}}},created(){this.listarNotas()},methods:{alerta(){console.log("Alerta!!!"),this.mensaje.color="warning",this.mensaje.texto="Probando la alerta",this.showAlert()},listarNotas(){this.axios.get("/nota").then((t=>{console.log(t.data),this.notas=t.data})).catch((t=>{console.log(t.response)}))},agregarNota(){this.axios.post("/nueva-nota",this.nota).then((t=>{this.notas.push(t.data),this.nota.nombre="",this.nota.descripcion="",this.mensaje.color="success",this.mensaje.texto="Nota agregada",this.showAlert()})).catch((t=>{console.log(t.response),this.mensaje.color="danger",this.mensaje.texto=t.response.data.error.errors.nombre.message?t.response.data.error.errors.nombre.message:"Error de sistema",this.showAlert()}))},eliminarNota(t){console.log(t),this.axios.delete(`/nota/${t}`).then((t=>{const e=this.notas.findIndex((e=>e._id===t.data._id));this.notas.splice(e,1),this.mensaje.color="success",this.mensaje.texto="Nota eliminada",this.showAlert()})).catch((t=>{console.log(t.response)}))},activarEdicion(t){console.log(t),this.editar=!0,this.axios.get(`/nota/${t}`).then((t=>{this.notaEditar=t.data})).catch((t=>{console.log(t.response)}))},editarNota(t){console.log(t),this.axios.put(`/nota/${t._id}`,t).then((t=>{const e=this.notas.findIndex((e=>e._id===t.data._id));this.notas[e].nombre=t.data.nombre,this.notas[e].descripcion=t.data.descripcion,this.mensaje.color="success",this.mensaje.texto="Nota actualizada",this.showAlert(),this.editar=!1})).catch((t=>{console.log(t.response)}))},countDownChanged(t){this.dismissCountDown=t},showAlert(){this.dismissCountDown=this.dismissSecs}}}),i=a,r=o(1001),c=(0,r.Z)(i,s,n,!1,null,null,null),l=c.exports}}]);
//# sourceMappingURL=about.4e8e1d11.js.map