<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação dos clubes</h2>

    <v-simple-table class="tabela">
      <template v-slot:default>
        <thead>
          <tr>
            <th colspan="2" class="text-left">Clube</th>
            <th class="text-right">Pontos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(clube, index) in clubesOrdenados" :key="clube.id">
            <td>{{ index + 1 }}</td>
            <td>
              <v-avatar class="mr-2" size="24">
                <img :src="clube.escudo" :alt="clube.nome" />
              </v-avatar>
              <span>
                {{ clube.nome }}
              </span>
            </td>
            <td class="text-right">{{ clube.pontos }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "ClubesListaView",
  data() {
    return {
      clubesLista: [],
    };
  },
  computed: {
    clubesOrdenados() {
      const listaOrdenada = [...this.clubesLista].sort((a, b) =>
        a.pontos > b.pontos ? -1 : 1
      );
      return listaOrdenada;
    },
  },
  created() {
    fetch("https://hackthon-decola.firebaseio.com/clubes-lista.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.clubesLista = json;
      });
  },
};
</script>

<style scoped>
.tabela {
  border-radius: 5px;
}
</style>
