import React, { memo, useCallback } from 'react';
import ReactGA from 'react-ga';
import ProjectMediaContainer from 'containers/ProjectMediaContainer';
import * as styles from './styles';

interface Props {
  title: string,
  url?: string,
  products: string,
  technologies: string,
  description: string,
  media?: {
    slug: string,
  }[],
  isCurrent: boolean,
  showPopup: (...args: any[]) => any,
}

export default memo(
  (props: Props) => {
    const {
      title,
      url,
      products,
      technologies,
      description,
      media,
      isCurrent,
      showPopup,
    } = props;

    const handleUrlClick = useCallback(() => ReactGA.event({
      category: 'Project',
      action: 'Project URL Click',
      label: title,
    }), [title]);

    const {
      Container,
      Section,
      Label,
      Copy,
      Link,
      LinkWrapper,
      MediaWrapper,
    } = styles;

    const descriptionMarkup = { __html: description };

    return (
      <Container current={isCurrent}>
        { !!products
          && (
            <Section>
              <Label>Products</Label>
              <Copy>{ products }</Copy>
            </Section>
          )
        }

        <Section>
          <Label>Technologies</Label>
          <Copy>{ technologies }</Copy>
        </Section>

        <Section>
          <Label>Description</Label>
          <Copy dangerouslySetInnerHTML={descriptionMarkup} />
        </Section>
        {
          !!url
          && (
            <LinkWrapper>
              <Link href={url} target="_blank" rel="noopener noreferrer" onClick={handleUrlClick}>Visit { title }</Link>
            </LinkWrapper>
          )
        }
        <MediaWrapper>
          {
            !!media && media.map(m => (
              <ProjectMediaContainer {...m} showPopup={showPopup} noSiblings={media.length === 1} key={`ProjectMedia_${m.slug}`} />
            ))
          }
        </MediaWrapper>
      </Container>
    );
  },
);
