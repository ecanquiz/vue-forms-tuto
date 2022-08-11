# Componente Input

## `AppInput.vue`

El objetivo de esta lección es crear un componente `AppInput.vue`.

Cada vez que construyamos formularios en Vue, la creación de componentes reutilizables para cada tipo de entrada específico nos permitirá replicarlos, modificarlos y también ampliarlos fácilmente.

Esto también asegura que todos nuestros formularios de solicitud sean consistentes.

## Crear el Archivo

Empecemos creando el archivo `AppInput.vue` en nuestra carpeta de componentes.

Comenzaremos copiando el elemento `input` con su `label`, tal como están actualmente en el formulario de demostración, y lo pegaremos en la plantilla del nuevo componente; vamos a transformar este código estático en algo más reutilizable y flexible. Después de todo, ¡ese es el beneficio de fabricar componentes!

📃`AppInput.vue`
```vue
<template>
  <label>Title</label>
  <input
    v-model="form.title"
    type="text"
    placeholder="Title"
    class="field"
  >
</template>
```

>En Vue 3 podemos tener múltiples nodos raíz. Esto significa que podemos tener el `label` y el `input` en el nivel raíz sin necesidad de envolverlos en un único elemento raíz como un `div` - como teníamos que hacer en Vue 2.

---

Lo primero que debemos hacer es permitir que nuestro componente reciba una propiedad `label` del padre. Para hacer esto, vamos a crear una propiedad `label`. Esta propiedad se usará no solo para nuestro elemento `<label>`, sino también como `placeholder`, por lo que es muy conveniente que solo tengamos que definirlo una vez en el padre.

📃`AppInput.vue`
```vue
<script setup lang="ts">

withDefaults(defineProps<{
  label?: string
}>(), {
  label: ''
})

</script>
```

Tenga en cuenta que la propiedad `label` es de tipo `string`. En caso de no ser suministrada su valor por defecto será `''`.

---

Ahora podemos usar nuestra nueva propiedad `label` a través de la interpolación dentro del elemento `<label>` de nuestro plantilla.

📃`AppInput.vue`
```vue{2}
<template>
  <label>{{ label }}</label>
  <input
    v-model="form.title"
    type="text"
    placeholder="Title"
    class="field"
  >
</template>
```

Mientras estamos en eso, vamos a eliminar la directiva `v-model` ya que ya no la usaremos dentro del componente. Volveremos a usar `v-model` más adelante.

También eliminaremos `type`, porque el padre lo proporcionará como parte de los `attrs`; recuerde que queremos mantener el componente lo más flexible posible.

El usuario de este componente puede querer que sea de tipo `email` o `password`, y el valor predeterminado para la entrada ya es de tipo `text`, si no se declara.

Finalmente, vinculemos también el atributo `placeholder` a nuestra propiedad `label`. Esto asegurará que tanto el texto de `placeholder`, dentro del elemento `<input>`, como el `label` estén coordinados y sean reactivos.

📃`AppInput.vue`
```vue{3,5,10,13}
<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
}>(), {
  label: ''
})
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <input
    class="field"
    :placeholder="label"
  >
</template>
```

## `v-model`: Vinculando a el valor

>Ahora que nuestro componente tiene su estructura básica, podemos pasar a agregar la capacidad para que nuestro componente esté listo para el `v-model`.

De forma predeterminada en Vue 3, `v-model` espera que una propiedad llamada `modelValue` esté en su componente compatible con `v-model`. Avancemos y agreguemos esta nueva propiedad, y luego vincúlela al atributo `value` de nuestro elemento `<input>`.

Lo usaremos por defecto como una cadena vacía, pero especificaremos `string` y `number` como los tipos permitidos.

Existe una buena posibilidad de que el padre intente vincular un texto o una cadena como _`'Hello'`_ a nuestra entrada, pero también puede intentar vincular un valor numérico, como la edad del usuario o _`30`_; debemos poder permitir que sea establecido.


📃`AppInput.vue`
```vue{4,7,14}
<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  modelValue?: string | number
}>(), {
  label: '',
  modelValue: ''
})
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <input
    :value="modelValue"
    :placeholder="label"
    class="field"    
  >
</template>
```

Ahora que tenemos nuestra propiedad `modelValue` establecida y vinculada al atributo `value` del elemento `<input>`, veamos la segunda parte del enlace bidireccional del `v-model`: emitir un evento.

## `v-model`: Emitiendo el evento `update:modelValue`

Todos los componentes que pueden ser _v-modeled_ deben emitir un evento para que el padre pueda capturar las actualizaciones de los datos de ese componente.

En Vue 3, de forma predeterminada, todos los contratos `v-model` esperan que su componente emita un evento `update:modelValue`, independientemente del tipo de entrada o entradas que contenga su componente.

Avancemos y agreguemos un detector de eventos `@input` a nuestro elemento `<input/>` y emitamos un evento `update:modelValue` cada vez que ocurra un evento de entrada.


📃`AppInput.vue`
```vue{16}
<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  modelValue?: string | number
}>(), {
  label: '',
  modelValue: ''
})
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <input
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="field"    
  >
</template>
```

Agregar un detector `@input` a nuestro elemento de entrada nos permite activar el evento requerido cada vez que el usuario escribe algo en el campo de entrada.

Tenga en cuenta que estamos pasando el `$event.target.value` como la carga útil del evento. Este es el valor que el `v-modelo` recibirá en el padre.

## Componente padre `TaskForm.vue`

Hablando del padre, regresemos a nuestro formulario y usemos nuestro nuevo componente `AppInput.vue` en lugar de nuestros elementos nativos para probar nuestro código.

Reemplacemos las entradas de `Title`, `Description` y `Location` en nuestro formulario con nuestro nuevo componente.

📃`TaskForm.vue`

```html{14,15,16,17,18,20,21,22,23,24,28,29,30,31,32}
  <form @submit.prevent="$emit('sendForm', form)">
    <label>Select a category</label>
    <select v-model="form.category">
      <option
        v-for="option in categories"
        :value="option"
        :key="option"
        :selected="option === form.category"
      >{{ option }}</option>
    </select>

    <h3>Name & describe your form</h3>
    
    <AppInput
      v-model="form.title"
      label="Title"
      type="text"
    />

    <AppInput
      v-model="form.description"
      label="Description"
      type="text"
    />

    <h3>Where is your form?</h3>

    <AppInput
      v-model="form.location"
      label="Location"
      type="text"
    />

    <h3>Are pets allowed?</h3>
    <div>
      <input
        type="radio"
        v-model="form.pets"
        :value="1"
        name="pets"
      />
      <label>Yes</label>
    </div>

    <div>
      <input
        type="radio"
        v-model="form.pets"
        :value="0"
        name="pets"
      />
      <label>No</label>
    </div>

    <h3>Extras</h3>
    <div>
      <input
        type="checkbox"
        v-model="form.extras.catering"
        class="field"
      />
      <label>Catering</label>
    </div>

    <div>
      <input
        type="checkbox"
        v-model="form.extras.music"
        class="field"
      />
      <label>Live music</label>
    </div>

    <button class="button -fill-gradient" type="submit">Submit</button>
  </form>    
</template>
```

Recordemos que para que esto funcione hay que importar `AppInput.vue`.

📃`TaskForm.vue`
```vue{3}
<script setup lang="ts">
import { reactive } from "vue"
import AppInput from "@/components/AppInput.vue"

// omitted for brevity ...
</script>
```

Nuestros componentes parecen estar _"funcionando"_, **pero parece haber un problema con los estilos**.

Si inspeccionamos más el componente, parece que nuestro atributo `type` no se encuentra por ninguna parte. Queremos poder asignar atributos como `type` en el elemento `<input>` del componente cuando los configuramos en la instancia en el padre.

Echemos un vistazo a cómo lograr esto.

## Asignando los `$attrs` al `input`

En Vue, siempre que transmita atributos, clases y estilos de un padre a un hijo, como lo estamos haciendo con el `type` en nuestro componente `AppInput`, Vue intentará averiguar automáticamente dónde se deben inyectar estos atributos dentro de su plantilla.

En componentes con un solo elemento envolvente, también conocidos como componentes de raíz única, este comportamiento es muy sencillo. Vue simplemente inyectará todos los atributos, clases y estilos en el elemento raíz.

En los componentes multirraíz, como nuestro `AppInput`, Vue no puede averiguar sin nuestra ayuda a cuál de los nodos o fragmentos debe inyectar los atributos, por lo que Vue simplemente se da por vencido y emite una advertencia.

```
[Vue warn]: Extraneous non-props attributes (type) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. 
  at <AppInput modelValue="" onUpdate:modelValue=fn label="Location"  ... > 
  at <ComponentsForm> 
  at <App>
```
En el caso de nuestro componente `AppInput.vue`, queremos poder inyectar atributos directamente en el `input`, por lo que debemos vincular manualmente el objeto `$attrs`.

Avancemos y hagámoslo agregando `v-bind="$attrs"` a nuestro elemento `<input>`.

📃`AppInput.vue`
```html{2}
<input
  v-bind="$attrs"
  :value="modelValue"
  :placeholder="label"
  @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  class="field"    
>
```

Con este pequeño cambio, los elementos `<input>` ahora recibirán correctamente el enlace `type` del padre y se aplicarán nuestras clases CSS.

## A continuación...

En esta lección, aprendimos cómo construir nuestro primer componente de formulario, `AppInput.vue`, y cómo crear correctamente un componente que esté listo para `v-model`.

En nuestra próxima lección, construiremos nuestro próximo componente, `AppSelect.vue`.