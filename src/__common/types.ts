import { PageProps } from 'gatsby';
import { WindowLocation } from '@reach/router';

export interface IPageProps<ServerData> extends PageProps<object, object, WindowLocation['state'], ServerData> {}
