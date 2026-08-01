import { registerAstroComponent } from '@cloudcannon/editable-regions/astro';

import GuideCard from '../components/GuideCard.astro';
import PostCard from '../components/PostCard.astro';
import Sidebar from '../components/Sidebar.astro';
import SearchBox from '../components/SearchBox.astro';
import ShareButtons from '../components/ShareButtons.astro';
import AuthorBox from '../components/AuthorBox.astro';
import RelatedPosts from '../components/RelatedPosts.astro';
import TableOfContents from '../components/TableOfContents.astro';
import ReadingProgress from '../components/ReadingProgress.astro';
import Breadcrumb from '../components/Breadcrumb.astro';

registerAstroComponent('guide_card', GuideCard);
registerAstroComponent('post_card', PostCard);
registerAstroComponent('sidebar', Sidebar);
registerAstroComponent('search_box', SearchBox);
registerAstroComponent('share_buttons', ShareButtons);
registerAstroComponent('author_box', AuthorBox);
registerAstroComponent('related_posts', RelatedPosts);
registerAstroComponent('table_of_contents', TableOfContents);
registerAstroComponent('reading_progress', ReadingProgress);
registerAstroComponent('breadcrumb', Breadcrumb);
