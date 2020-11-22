// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/student-registration$0.0.1/templates/home.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><title>CodePen - Ecommerce animations</title><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.2.4/css/simple-line-icons.min.css><link rel=stylesheet href=styles/style.css></head><body><nav><div class=mini><p class=products>Empty</p><p class=names></p><p class=miniprice></p></div><ul><li>Home</li><li><a href=/login>Login</a></li><li><a href=/cadastro>Cadastro</a></li><li>Feminino</li><li>Masculino</li><li>Infantil</li><li>Contato</li></ul><span style=margin-left:150px;>bem vindo - " +
    marko_escapeXml(data.nome) +
    "</span><div class=\"cart icon-basket\"><span class=number>1</span></div></nav><div class=container><div class=product><img src=images/blusa1.jpg width=130 height=130><h2 class=header>Camisas casual masculina</h2><p class=price>R$25,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/camisa1.jpg width=130 height=130><h2 class=header>Camisa polo masculina</h2><p class=price>R$40,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/menina1.jpg width=130 height=130><h2 class=header>Jaqueta florida masculina </h2><p class=price>R$65,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/menino1.jpg width=130 height=130><h2 class=header>Camisa nike cinza com galáxia</h2><p class=price>R$25,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/blusa2.jpg width=130 height=130><h2 class=header>Calça presta</h2><p class=price>R$33,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/camisa2.jpg width=130 height=130><h2 class=header>Camisa branca da adidas</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/menina2.jpg width=130 height=130><h2 class=header>Camisa pulma masculina roxa</h2><p class=price>R$19,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/menino2.jpg width=130 height=130><h2 class=header>Jaqueta sports preta</h2><p class=price>R$55,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/blusa3.jpg width=130 height=130><h2 class=header>Camisa puma branca</h2><p class=price>R$16,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/camisa3.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/menino3.jpg width=130 height=130><h2 class=header>Calça preta puma</h2><p class=price>R$25,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/menina3.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/blusa9.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/camisa11.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/menina4.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/menino4.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/blusa5.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/camisa5.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/menina5.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/menino5.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/blusa6.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/camisa6.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/menina6.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/menino6.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div><div class=product><img src=images/blusa25.jpg width=130 height=130><h2 class=header>Vestido listrado com laço</h2><p class=price>R$30,00</p><div class=btn>Carrinho</div><div class=quickview>Add carrinho</div></div></div><div class=quickviewContainer><div class=close></div><h2 class=headline></h2><p class=description></p><img src=https://placeimg.com/100/100><img src=https://placeimg.com/100/100><img src=https://placeimg.com/100/100></div><script src=https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js></script><script src=scripts/script.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "184");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/student-registration$0.0.1/templates/home.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
