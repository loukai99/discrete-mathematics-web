import Home from '@/views/Home'
import Learning from '@/views/Learning'
import Video from '@/views/pages/Video'
import Document from '@/views/pages/Document'
import Discuss from '@/views/pages/Discuss'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '离散数学课程线上平台'
    }
  },
  {
    path: '/learning',
    name: 'learning',
    component: Learning,
    meta: {
      title: '离散数学课程线上平台-学习页面'
    }
  },
  {
    path: '/learning/video',
    name: 'video',
    component: Video
  },
  {
    path: '/learning/document',
    name: 'document',
    component: Document
  },
  {
    path: '/learning/discuss',
    name: 'discuss',
    component: Discuss
  }
]
