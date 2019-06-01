import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import ProjectMediaContainer from 'containers/ProjectMediaContainer';
import * as styles from './styles';

const Content = memo(
  props => {
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

    const handleUrlClick = useCallback(() => ga('send', 'event', 'Project URL Click', title), title);

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
            !!media && media.map(m => <ProjectMediaContainer {...m} showPopup={showPopup} noSiblings={media.length === 1} key={`ProjectMedia_${m.slug}`} />)
          }
        </MediaWrapper>
      </Container>
    );
  },
);

Content.propTypes = {
  showPopup: PropTypes.func,
  isCurrent: PropTypes.bool,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  products: PropTypes.string,
  technologies: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  media: PropTypes.array,
};

export default Content;
