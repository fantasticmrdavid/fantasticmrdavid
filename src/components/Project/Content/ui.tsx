import React, { memo, useCallback } from 'react';
import ReactGA from 'react-ga';
import ProjectMedia from 'components/ProjectMedia';
import { Project as ProjectProps } from 'data/projects';
import Action from '../Action';
import * as styles from './styles';

export type Props = {
  isCurrent: boolean,
  nextProject: ProjectProps,
  previousProject: ProjectProps,
  updateCurrent: (target: string | undefined) => void,
} & ProjectProps;

const {
  ActionsContainer,
  Container,
  Section,
  Label,
  Copy,
  Link,
  LinkWrapper,
  MediaWrapper,
  Spacer,
} = styles;

export default memo(
  (props: Props) => {
    const {
      title,
      url,
      products,
      technologies,
      description,
      media,
      nextProject,
      previousProject,
      isCurrent,
      updateCurrent,
    } = props;

    const handleUrlClick = useCallback(() => ReactGA.event({
      category: 'Project',
      action: 'Project URL Click',
      label: title,
    }), [title]);

    const descriptionMarkup = { __html: description };

    return (
      <Container current={isCurrent}>
        { isCurrent && <div id="projectContentTop" /> }
        { !!products && (
          <Section>
            <Label>Products</Label>
            <Copy>{ products }</Copy>
          </Section>
        )}
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
            !!media && media.map((m) => (
              <ProjectMedia {...m} noSiblings={media.length === 1} key={`ProjectMedia_${m.slug}`} />
            ))
          }
        </MediaWrapper>
        <Spacer />
        <ActionsContainer>
          <Action label="Previous" type="back" project={previousProject} updateCurrent={updateCurrent} />
          <Action label="Next" type="next" project={nextProject} updateCurrent={updateCurrent} />
        </ActionsContainer>
      </Container>
    );
  },
);
