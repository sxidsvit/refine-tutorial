import { useList } from '@pankod/refine-core'

const postUseListResult = useList({
  resource: 'posts',
  config: {
    sort: [
      {
        field: 'id',
        order: 'desc',
      },
    ],
    filters: [
      {
        field: 'title',
        operator: 'contains',
        value: 'hello',
      },
    ],
  },
})
