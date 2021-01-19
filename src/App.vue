<template>
  <QLayout view="lHh Lpr lFf">
    <QHeader elevated class="glossy">
      <QToolbar>
        <QBtn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <QToolbarTitle> Quasar App </QToolbarTitle>

        <div>Quasar v{{ $q.version }}</div>
      </QToolbar>
    </QHeader>

    <QDrawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-2">
      <QList>
        <QItem clickable tag="a" target="_blank" href="https://github.com/quasarframework/">
          <QItemSection avatar>
            <QIcon name="code" />
          </QItemSection>
          <QItemSection>
            <QItemLabel>Github</QItemLabel>
            <QItemLabel caption>github.com/quasarframework</QItemLabel>
          </QItemSection>
        </QItem>
      </QList>
    </QDrawer>

    <QPageContainer>
      <HelloWorld />
    </QPageContainer>
  </QLayout>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld,
  },

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>

<style></style>
