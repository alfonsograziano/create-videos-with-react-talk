import React, {FC} from 'react';
import {CSSAssetSchemaRenderDescription} from '../../utils/renderDescriptionSchema';
import {useDynamicStyle} from '../../hooks/useDynamicStyle';

type HTMLContainerProps = CSSAssetSchemaRenderDescription & {
	htmlContent: string;
	dynamicStyle?: any;
};

export const HTMLContainer: FC<HTMLContainerProps> = ({
	htmlContent,
	dynamicStyle,
	...props
}) => {
	const currentFrameStyle = useDynamicStyle(dynamicStyle);
	return (
		<div
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{__html: htmlContent}}
			style={{...props.style, ...currentFrameStyle}}
		/>
	);
};
