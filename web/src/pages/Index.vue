<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <author-card :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <post-card
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
        :metadata="$page.metadata"
      />
    </div>
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  posts: allSanityPost(sortBy: "publishedAt") {
    edges {
      node {
        id
        title
        slug {
          current
        }
        topics {
          id
          title
          slug {
            current
          }
        }
        series {
          id
          title
        }
        publishedAt(format: "MMMM D, YYYY")
        _rawExcerpt
        _rawBody
        series {
          id
          title
        }
        speakers {
          speaker {
            name
            image {
              asset {
              _id
              url
            }
            caption
            alt
            hotspot {
              x
              y
              height
              width
            }
            crop {
              top
              bottom
              left
              right
            }
            }
          }
        }
        
        mainImage {
          asset {
            _id
            url
          }
          caption
          alt
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }
      }
    }
  }
}

</page-query>

<script>
import AuthorCard from '~/components/AuthorCard'
import PostCard from '~/components/PostCard'

export default {
  components: {
    AuthorCard,
    PostCard
  },
  metaInfo: {
    title: 'Scripture Stream'
  }
}
</script>
