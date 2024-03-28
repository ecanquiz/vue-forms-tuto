import{_ as s,c as a,o as e,N as o}from"./chunks/framework.d7a9eabf.js";const u=JSON.parse('{"title":"Componente Textarea","description":"","frontmatter":{},"headers":[],"relativePath":"tuto/app-textarea.md"}'),n={name:"tuto/app-textarea.md"},l=o(`<h1 id="componente-textarea" tabindex="-1">Componente Textarea <a class="header-anchor" href="#componente-textarea" aria-label="Permalink to &quot;Componente Textarea&quot;">​</a></h1><p>Llegamos al último de nuestros componentes de formulario para este curso.</p><p>Con todo lo que hemos aprendido en este tutorial veremos lo fácil que es construir el <code>AppTextarea</code> ya que prácticamente es muy parecido al componente <code>AppInput</code>.</p><p><strong>¡Vamos a sumergirnos!</strong></p><h2 id="crear-el-archivo-apptextarea-vue" tabindex="-1">Crear el Archivo <code>AppTextarea.vue</code> <a class="header-anchor" href="#crear-el-archivo-apptextarea-vue" aria-label="Permalink to &quot;Crear el Archivo \`AppTextarea.vue\`&quot;">​</a></h2><p>Como hemos venido haciendo, vamos a crear un nuevo archivo de componente llamado <code>AppTextarea.vue</code> y copiaremos el elemento <code>textarea</code>, junto con su respectivo <code>label</code>, en el nuevo archivo dentro de una etiqueta <code>template</code>.</p><p>📃<code>AppTextarea.vue</code></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Description</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">textarea</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">form.description</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Description</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">field</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;&lt;/</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Como hemos venido haciendo permitiremos que nuestro componente reciba una propiedad <code>label</code> del padre. Para hacer esto, vamos a crear una propiedad <code>label</code>. Esta propiedad se usará no solo para nuestro elemento <code>&lt;label&gt;</code>, sino también como <code>placeholder</code>, por lo que es muy conveniente que solo tengamos que definirlo una vez en el padre.</p><p>📃<code>AppTextarea.vue</code></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#82AAFF;">withDefaults</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">defineProps</span><span style="color:#89DDFF;">&lt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Como hemos venido haciendo, la propiedad <code>label</code> es de tipo <code>string</code>. Su valor por defecto será una cadena vacia en caso de no ser suministrada.</p><p>Ahora podemos usar nuestra nueva propiedad <code>label</code> a través de la interpolación dentro del elemento <code>&lt;label&gt;</code> de nuestro <code>template</code>. Vinculemos también el atributo <code>placeholder</code> a nuestra propiedad <code>label</code>.</p><p>Esto asegurará que tanto el texto de <code>placeholder</code>, dentro del elemento <code>&lt;textarea&gt;</code>, como el <code>label</code> estén coordinados y sean reactivos.</p><p>📃<code>AppTextarea.vue</code></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#82AAFF;">withDefaults</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">defineProps</span><span style="color:#89DDFF;">&lt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ label }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;">                        </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">form.description</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">field</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;&lt;/</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="v-model-vinculando-valor" tabindex="-1"><code>v-model</code>: Vinculando valor <a class="header-anchor" href="#v-model-vinculando-valor" aria-label="Permalink to &quot;\`v-model\`: Vinculando valor&quot;">​</a></h2><p>Ahora que nuestro componente tiene su estructura básica, podemos pasar a agregar la capacidad para que nuestro componente esté listo para el <code>v-model</code>.</p><p>Avancemos y agreguemos esta nueva propiedad, y luego vincúlela al atributo <code>value</code> de nuestro elemento <code>&lt;textarea&gt;</code>.</p><p>Lo usaremos por defecto como una cadena vacía, pero especificaremos <code>string</code> y <code>number</code> como los tipos permitidos.</p><p>📃<code>AppTextarea.vue</code></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#82AAFF;">withDefaults</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">defineProps</span><span style="color:#89DDFF;">&lt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">modelValue</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">modelValue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ label }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;">                        </span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">modelValue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">field</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;&lt;/</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Ahora hagamos la segunda parte del enlace bidireccional del <code>v-model</code>: emitir el evento.</p><h2 id="v-model-emitir-el-update-modelvalue" tabindex="-1"><code>v-model</code>: Emitir el <code>update:modelValue</code> <a class="header-anchor" href="#v-model-emitir-el-update-modelvalue" aria-label="Permalink to &quot;\`v-model\`: Emitir el \`update:modelValue\`&quot;">​</a></h2><p>Al igual que hicimos con el componente <code>AppInput</code>, avancemos y agreguemos un detector de eventos <code>@input</code> a nuestro elemento <code>&lt;textarea&gt;</code> y emitamos un evento <code>update:modelValue</code> cada vez que ocurra un evento de entrada.</p><p>📃<code>AppTextarea.vue</code></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ label }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">modelValue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">@input</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$emit(&#39;update:modelValue&#39;, ($event.target as HTMLInputElement).value)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">field</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">   </span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;&lt;/</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Agregar un detector <code>@input</code> a nuestro elemento <code>textarea</code> nos permite activar el evento requerido cada vez que el usuario escribe algo en el campo <code>textarea</code>.</p><p>Tenga en cuenta que estamos pasando el <code>$event.target.value</code> como la carga útil del evento. Este es el valor que el <code>v-modelo</code> recibirá en el padre.</p><h2 id="asignando-los-attrs-al-textarea" tabindex="-1">Asignando los <code>$attrs</code> al <code>textarea</code> <a class="header-anchor" href="#asignando-los-attrs-al-textarea" aria-label="Permalink to &quot;Asignando los \`$attrs\` al \`textarea\`&quot;">​</a></h2><p>En el caso de nuestro componente <code>AppTextArea.vue</code>, también queremos poder inyectar atributos directamente en el <code>textarea</code>, por lo que debemos vincular manualmente el objeto <code>$attrs</code>.</p><p>Avancemos y hagámoslo agregando <code>v-bind=&quot;$attrs&quot;</code> a nuestro elemento <code>&lt;textarea&gt;</code>.</p><p>📃<code>AppTextarea.vue</code></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ label }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;">    </span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$attrs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">modelValue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">label</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">@input</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$emit(&#39;update:modelValue&#39;, ($event.target as HTMLInputElement).value)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">field</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;&lt;/</span><span style="color:#F07178;">textarea</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Con este pequeño cambio, los elementos <code>&lt;textarea&gt;</code> ahora recibirán correctamente los vínculos <code>cols</code> y <code>rows</code> del padre y se aplicarán nuestras clases CSS.</p><h2 id="componente-padre-taskform-vue" tabindex="-1">Componente padre <code>TaskForm.vue</code> <a class="header-anchor" href="#componente-padre-taskform-vue" aria-label="Permalink to &quot;Componente padre \`TaskForm.vue\`&quot;">​</a></h2><p>Regresemos a nuestro formulario y usemos nuestro nuevo componente <code>AppTextarea.vue</code> en lugar de nuestro elemento nativo para probar nuestro código.</p><p>Reemplacemos el <code>textarea</code> entrada de <code>Description</code> en nuestro formulario con nuestro nuevo componente.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">AppTextarea</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">form.description</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">      </span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><p>Solo nos falta declarar <code>AppTextarea.vue</code> como <a href="./../tuto/app-checkbox.html#complemento-global">complemento global</a> para que esto funcione.</p><h2 id="terminando" tabindex="-1">Terminando <a class="header-anchor" href="#terminando" aria-label="Permalink to &quot;Terminando&quot;">​</a></h2><p>Con la finalización de nuestro componente <code>AppTextarea</code>, culminamos la creación de nuestros componentes de formulario. ¡Buen trabajo en lograrlo hasta el final!</p><p>En la siguiente lección, daremos un pequeño giro y veremos cómo podemos manejar el envío de formularios correctamente en Vue aprovechando el poder de una biblioteca ampliamente utilizada para realizar solicitudes HTTP: Axios.</p>`,43),p=[l];function t(c,r,D,F,y,i){return e(),a("div",null,p)}const m=s(n,[["render",t]]);export{u as __pageData,m as default};