const mongoose = require("mongoose");

const InvestidorasSchema = new mongoose.Schema(
  {
    cnpj: { type: Number, required: true },
    hashPass: { type: String },
    nome: { type: String },
    telefone: { type: String },
    idade: { type: Number },
    genero: {
      type: String, enum: [
        "Feminino"
        , "Masculino"
        , "Transgênero"
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
        type: String,
        enum: [
          "Alimentação"
          , "Beleza"
          , "Financeiro"
          , "Tecnologia"
          , "Vestuário"
        ]
      }
    ],
    ticket: { type: Number },
    taxaJuros: { type: Number },
    parcelasMaximas: { type: Number },
    investimentoTotal: { type: Number },
    creditoQuantidade: { type: Number },
    creditoValor: { type: Number },
    investimentoResidual: { type: Number },
    investimentoLucro: { type: Number }
  },
  {
    versionKey: false
  }
);

const investidorasDB = mongoose.model("Investidoras", InvestidorasSchema);

module.exports = investidorasDB;
