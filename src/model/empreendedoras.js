const mongoose = require("mongoose");

const EmpreendedorasSchema = new mongoose.Schema(
  {
    cpf: { type: Number, required: true },
    hashPass: { type: String },
    nome: { type: String },
    telefone: { type: String },
    idade: { type: Number },
    genero: {
      type: String, enum: [
        "Feminino"
        , "Masculino"
        , "Não binário"
        , "Transgênero"
        , "Prefiro não responder"
      ]
    },
    estadoCivil: {
      type: String, enum: [
        "Solteira"
        , "União Estável"
        , "Casada"
        , "Divorciada"
        , "Prefiro não responder"
      ]
    },
    escolaridade: {
      type: String, enum: [
        "Ensino Fundamental"
        , "Ensino Médio"
        , "Ensino Superior"
        , "Pós-Graduação"
      ]
    },
    tipoNegocio: [
      {
        type: String, enum: [
          "Alimentação"
          , "Beleza"
          , "Entrega"
          , "Tecnologia"
          , "Vestuário"
          , "Outros"
        ]
      }
    ],
    tempoNegocio: { type: Number },
    creditoSolicitado: { type: Number },
    formaPagamento: {
      type: String, enum: [
        "Boleto - parcela única"
        , "Boleto - parcelado"
        , "Débito"
        , "Pix - parcela única"
        , "Pix - parcelado"
      ]
    },
    parcelamento: { type: Number },
    creditoInformacoes: { type: String },
    creditoRecebido: { type: Boolean },
    creditoUsoAcordado: { type: Boolean },
    relatoData: { type: Date },
    relato: { type: String },
    emojiData: { type: Date },
    emoji: {
      type: String, enum: [
        "Feliz"
        , "Indiferente"
        , "Preocupada"
        , "Triste"
      ]
    }
  },
  {
    versionKey: false
  }
);

const empreendedorasDB = mongoose.model("Empreendedoras", EmpreendedorasSchema);

module.exports = empreendedorasDB;
