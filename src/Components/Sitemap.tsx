import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { sitemapType } from '../types/sitemapType';

export const Sitemap = (props: sitemapType) => {
    const match = useMediaQuery('(min-width: 1024px)');
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                height: 'fit-content',
                textAlign: `${!match ? 'center' : 'left'}`,
            }}
        >
            <Typography
                fontWeight={700}
                sx={{ color: '#EFF1F7', marginBottom: '4px' }}
            >
                {props.title}
            </Typography>
            {props.navigationPoints.map((navPoint) => (
                <Typography sx={{ color: '#9E9AA8' }}>{navPoint}</Typography>
            ))}
        </Box>
    );
};
